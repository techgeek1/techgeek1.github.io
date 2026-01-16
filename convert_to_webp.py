#!/usr/bin/env python3
"""Convert JPEG and PNG images to WebP format."""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Missing Pillow package. Install with: pip install Pillow")
    exit(1)

IMAGES_DIR = Path(__file__).parent / "docs" / "images"
QUALITY = 85  # WebP quality (0-100)


def convert_to_webp(src: Path) -> Path:
    """Convert an image to WebP format, stripping metadata."""
    dest = src.with_suffix(".webp")

    with Image.open(src) as img:
        # Convert to RGB if necessary (e.g., RGBA PNGs)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        # Create clean image without metadata
        clean = Image.new(img.mode, img.size)
        clean.putdata(list(img.getdata()))
        clean.save(dest, "WEBP", quality=QUALITY)

    return dest


def main():
    if not IMAGES_DIR.exists():
        print(f"Images directory not found: {IMAGES_DIR}")
        exit(1)

    extensions = {".jpg", ".jpeg", ".png"}
    images = [f for f in IMAGES_DIR.iterdir() if f.suffix.lower() in extensions]

    if not images:
        print("No JPEG or PNG images found.")
        return

    print(f"Converting {len(images)} images to WebP (quality={QUALITY})...\n")

    for src in images:
        dest = convert_to_webp(src)
        src_size = src.stat().st_size / 1024
        dest_size = dest.stat().st_size / 1024
        savings = (1 - dest_size / src_size) * 100
        print(f"  {src.name:30} {src_size:6.1f}KB -> {dest_size:6.1f}KB ({savings:+.0f}%)")

    print("\nDone.")


if __name__ == "__main__":
    main()
