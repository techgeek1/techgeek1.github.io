// Site initialization
document.addEventListener('DOMContentLoaded', () => {
    // Add social icons to header
    initHeaderSocials();

    // Initialize card system
    initCards();
});

function initHeaderSocials() {
    const header = document.querySelector('.md-header__inner');
    if (!header) return;

    const socialLinks = [
        {
            href: 'https://github.com/techgeek1',
            label: 'GitHub',
            svg: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
        },
        {
            href: 'https://linkedin.com/in/austin-rife',
            label: 'LinkedIn',
            svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
        }
    ];

    const container = document.createElement('div');
    container.className = 'md-header__social';

    socialLinks.forEach(({ href, label, svg }) => {
        const link = document.createElement('a');
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'md-header__button';
        link.title = label;
        link.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
        container.appendChild(link);
    });

    // Insert before the theme toggle
    const themeToggle = header.querySelector('[data-md-component="palette"]') ||
                       header.querySelector('.md-header__option');
    if (themeToggle) {
        themeToggle.parentNode.insertBefore(container, themeToggle);
    } else {
        header.appendChild(container);
    }
}

function initCards() {
    const grid = document.querySelector('.card-grid');
    if (!grid) return;

    // Make card links open in new tab
    grid.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Make contact links open in new tab
    document.querySelectorAll('.contact-link').forEach(link => {
        if (!link.href.startsWith('mailto:')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    const cards = grid.querySelectorAll('.card');
    let backdrop = null;
    let expandedCard = null;
    let placeholder = null;
    let originalRect = null;
    let isNavigatingBack = false;

    // Add gradient overlays and move year pills into each card's banner
    cards.forEach(card => {
        const bannerWrapper = card.querySelector(':scope > p:first-child');
        const edenBanner = card.querySelector('.card-banner-eden');
        const target = bannerWrapper || edenBanner;
        if (target) {
            target.style.position = 'relative';

            // Add gradient
            const gradient = document.createElement('div');
            gradient.className = 'card-gradient';
            target.appendChild(gradient);

            // Move year pill into banner
            const yearPill = card.querySelector('.card-year');
            if (yearPill) {
                target.appendChild(yearPill);
            }
        }
    });

    function collapseAll() {
        if (!expandedCard) return;

        const card = expandedCard;
        const content = document.querySelector('.md-content__inner');
        const contentRect = content.getBoundingClientRect();

        // Get current card position relative to content
        const cardRect = card.getBoundingClientRect();
        const startTop = cardRect.top - contentRect.top;
        const startLeft = cardRect.left - contentRect.left;

        // Get target position relative to content
        const placeholderRect = placeholder.getBoundingClientRect();
        const targetTop = placeholderRect.top - contentRect.top;
        const targetLeft = placeholderRect.left - contentRect.left;

        // Get banner elements for height control
        const banner = card.querySelector('.card-banner, .card-banner-eden');
        const bannerWrapper = card.querySelector(':scope > p:first-child');

        // Move card to content and use absolute positioning first
        content.style.position = 'relative';
        content.appendChild(card);
        card.style.position = 'absolute';
        card.style.top = startTop + 'px';
        card.style.left = startLeft + 'px';
        card.style.width = cardRect.width + 'px';
        card.style.height = cardRect.height + 'px';

        // Keep banner at expanded height initially
        if (banner) {
            banner.style.setProperty('height', '228px', 'important');
            banner.style.setProperty('min-height', '228px', 'important');
        }
        if (bannerWrapper) {
            bannerWrapper.style.setProperty('height', '228px', 'important');
            bannerWrapper.style.setProperty('min-height', '228px', 'important');
        }

        // Trigger collapse
        card.classList.add('collapsing');
        card.classList.remove('expanded');

        // Fade backdrop
        if (backdrop) {
            backdrop.classList.add('fading');
        }

        // Remove scroll listener and re-enable body scroll immediately
        window.removeEventListener('wheel', onScrollOutside, { passive: false });
        document.body.style.overflow = '';
        document.body.classList.remove('card-expanded');

        // Clear URL hash for deep linking
        if (!isNavigatingBack && window.location.hash) {
            history.pushState({}, '', window.location.pathname);
        }
        isNavigatingBack = false;

        // Trigger reflow before animating
        card.offsetHeight;

        // Delay position animation to sync with text fade (150ms)
        setTimeout(() => {
            // Animate card position
            card.style.top = targetTop + 'px';
            card.style.left = targetLeft + 'px';
            card.style.width = placeholderRect.width + 'px';
            card.style.height = placeholderRect.height + 'px';

            // Animate banner height
            if (banner) {
                banner.style.setProperty('height', '144px', 'important');
                banner.style.setProperty('min-height', '144px', 'important');
            }
            if (bannerWrapper) {
                bannerWrapper.style.setProperty('height', '144px', 'important');
                bannerWrapper.style.setProperty('min-height', '144px', 'important');
            }

            // Reset shadow to base
            card.style.boxShadow = '';
        }, 150);

        // Clean up after animation (150ms delay + 250ms animation)
        setTimeout(() => {
            // Move card back to grid
            if (placeholder && placeholder.parentNode) {
                placeholder.parentNode.insertBefore(card, placeholder);
                placeholder.remove();
                placeholder = null;
            }

            // Remove positioning
            card.style.position = '';
            card.style.top = '';
            card.style.left = '';
            card.style.width = '';
            card.style.height = '';
            card.style.zIndex = '';
            card.classList.remove('collapsing');

            // Remove scroll indicator class
            const cardContent = card.querySelector('.card-content');
            if (cardContent) {
                cardContent.classList.remove('has-overflow');
            }

            // Clean up banner inline styles
            const banner = card.querySelector('.card-banner, .card-banner-eden');
            const bannerWrapper = card.querySelector(':scope > p:first-child');
            if (banner) {
                banner.style.removeProperty('height');
                banner.style.removeProperty('min-height');
            }
            if (bannerWrapper) {
                bannerWrapper.style.removeProperty('height');
                bannerWrapper.style.removeProperty('min-height');
            }

            // Remove backdrop
            if (backdrop) {
                backdrop.remove();
                backdrop = null;
            }

            expandedCard = null;
            originalRect = null;
        }, 400);
    }

    function onScrollOutside(e) {
        if (!expandedCard) return;

        const cardContent = expandedCard.querySelector('.card-content');
        const isInsideContent = e.target.closest('.card-content');

        if (isInsideContent && cardContent) {
            // Check if at scroll limits
            const atTop = cardContent.scrollTop <= 0 && e.deltaY < 0;
            const atBottom = cardContent.scrollTop + cardContent.clientHeight >= cardContent.scrollHeight && e.deltaY > 0;

            if (atTop || atBottom) {
                // At limits - re-enable body scroll immediately so this scroll goes through
                document.body.style.overflow = '';
                collapseAll();
            }
            // Otherwise allow scrolling inside card content
        } else {
            // Scrolling outside card content - re-enable body scroll immediately so this scroll goes through
            document.body.style.overflow = '';
            collapseAll();
        }
    }

    function expandCard(card) {
        if (expandedCard) return;

        expandedCard = card;

        // Get current position
        const rect = card.getBoundingClientRect();
        originalRect = {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };

        // Create placeholder to hold grid space
        placeholder = document.createElement('div');
        placeholder.className = 'card-placeholder';
        placeholder.style.width = rect.width + 'px';
        placeholder.style.height = rect.height + 'px';
        card.parentNode.insertBefore(placeholder, card);

        // Create backdrop
        backdrop = document.createElement('div');
        backdrop.className = 'card-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', collapseAll);

        // Set card to fixed at its current position
        card.style.position = 'fixed';
        card.style.top = rect.top + 'px';
        card.style.left = rect.left + 'px';
        card.style.width = rect.width + 'px';
        card.style.height = rect.height + 'px';
        card.style.zIndex = '101';

        // Trigger reflow, then animate
        card.offsetHeight;

        // Start text fade out, backdrop, and trigger expanded state
        card.classList.add('transitioning');
        card.classList.add('expanded');
        backdrop.classList.add('visible');

        // Delay card position animation until text fades out
        setTimeout(() => {
            const expandedWidth = Math.min(800, window.innerWidth * 0.9);
            const expandedHeight = Math.min(600, window.innerHeight * 0.8);

            card.style.top = (window.innerHeight - expandedHeight) / 2 + 'px';
            card.style.left = (window.innerWidth - expandedWidth) / 2 + 'px';
            card.style.width = expandedWidth + 'px';
            card.style.height = expandedHeight + 'px';
            card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }, 150);

        // Lock body scroll and prevent header autohide
        document.body.style.overflow = 'hidden';
        document.body.classList.add('card-expanded');

        // Update URL hash for deep linking
        const cardId = card.dataset.cardId;
        if (cardId && !isNavigatingBack) {
            history.pushState({ cardId }, '', `#${cardId}`);
        }
        isNavigatingBack = false;

        // Add scroll listener to dismiss (passive: false to allow preventDefault)
        window.addEventListener('wheel', onScrollOutside, { passive: false });

        // Show scrollbar after transition (150ms fade + 250ms move)
        setTimeout(() => {
            card.classList.remove('transitioning');

            // Check for content overflow to show scroll indicator
            const cardContent = card.querySelector('.card-content');
            if (cardContent && cardContent.scrollHeight > cardContent.clientHeight) {
                cardContent.classList.add('has-overflow');
            }
        }, 400);
    }

    cards.forEach(card => {
        // Close button
        const closeBtn = card.querySelector('.card-close');
        if (closeBtn) {
            closeBtn.title = 'Close';
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                collapseAll();
            });
        }

        // Card click
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking a link inside the card
            if (e.target.closest('a')) return;

            const isExpanded = card.classList.contains('expanded');

            if (isExpanded) {
                // Only collapse if clicking banner or close button
                const clickedBanner = e.target.closest('.card-banner') ||
                                      e.target.closest('.card-banner-eden') ||
                                      e.target.closest('.card-close');
                if (clickedBanner) {
                    collapseAll();
                }
            } else {
                expandCard(card);
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expandedCard) {
            collapseAll();
        }
    });

    // Deep linking: handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash && !expandedCard) {
            const card = grid.querySelector(`[data-card-id="${hash}"]`);
            if (card) {
                isNavigatingBack = true;
                expandCard(card);
            }
        } else if (!hash && expandedCard) {
            isNavigatingBack = true;
            collapseAll();
        }
    });

    // Deep linking: open card from initial URL hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
        const card = grid.querySelector(`[data-card-id="${initialHash}"]`);
        if (card) {
            // Delay slightly to ensure page is ready
            setTimeout(() => expandCard(card), 100);
        }
    }
}
