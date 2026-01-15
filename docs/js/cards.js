// Card expansion functionality
document.addEventListener('DOMContentLoaded', () => {
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
    let originalPosition = null;
    let placeholder = null;

    function collapseAll() {
        const expanded = grid.querySelector('.card.expanded');
        if (expanded && originalPosition) {
            // Hide scrollbar during transition and trigger banner shrink
            expanded.classList.add('transitioning');
            expanded.classList.add('collapsing');

            // Animate back to original position and size
            expanded.style.top = originalPosition.top + 'px';
            expanded.style.left = originalPosition.left + 'px';
            expanded.style.width = originalPosition.width + 'px';
            expanded.style.height = originalPosition.height + 'px';

            // After animation, remove classes and clear styles
            setTimeout(() => {
                expanded.style.top = '';
                expanded.style.left = '';
                expanded.style.width = '';
                expanded.style.height = '';
                expanded.style.transform = '';
                cards.forEach(c => {
                    c.classList.remove('expanded');
                    c.classList.remove('dimmed');
                    c.classList.remove('transitioning');
                    c.classList.remove('collapsing');
                });
                // Remove placeholder
                if (placeholder) {
                    placeholder.remove();
                    placeholder = null;
                }
                originalPosition = null;
            }, 200);
        } else {
            cards.forEach(c => {
                c.classList.remove('expanded');
                c.classList.remove('dimmed');
                c.classList.remove('transitioning');
                c.classList.remove('collapsing');
            });
            if (placeholder) {
                placeholder.remove();
                placeholder = null;
            }
        }
    }

    function expandCard(card) {
        // Get card's current position relative to grid
        const gridRect = grid.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        const startX = cardRect.left - gridRect.left;
        const startY = cardRect.top - gridRect.top;
        const startWidth = cardRect.width;
        const startHeight = cardRect.height;

        // Store original position for collapse animation
        originalPosition = { top: startY, left: startX, width: startWidth, height: startHeight };

        // Create placeholder to maintain grid space
        placeholder = document.createElement('div');
        placeholder.className = 'card-placeholder';
        placeholder.style.width = startWidth + 'px';
        placeholder.style.height = startHeight + 'px';
        card.parentNode.insertBefore(placeholder, card);

        // Calculate center position and expanded size
        const expandedWidth = Math.min(800, gridRect.width - 32);
        const expandedHeight = 600;
        const centerX = (gridRect.width - expandedWidth) / 2;
        const centerY = 20;

        // Set starting position and size
        card.style.top = startY + 'px';
        card.style.left = startX + 'px';
        card.style.width = startWidth + 'px';
        card.style.height = startHeight + 'px';

        // Dim siblings and mark as expanded
        cards.forEach(c => {
            if (c === card) {
                c.classList.add('expanded');
                c.classList.add('transitioning');
            } else {
                c.classList.add('dimmed');
            }
        });

        // Animate to center and expanded size on next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                card.style.top = centerY + 'px';
                card.style.left = centerX + 'px';
                card.style.width = expandedWidth + 'px';
                card.style.height = expandedHeight + 'px';
            });
        });

        // Show scrollbar after transition
        setTimeout(() => {
            card.classList.remove('transitioning');
        }, 220);
    }

    cards.forEach(card => {
        // Close button
        const closeBtn = card.querySelector('.card-close');
        if (closeBtn) {
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

    // Click outside expanded card to collapse
    grid.addEventListener('click', (e) => {
        const expanded = grid.querySelector('.card.expanded');
        if (expanded && !e.target.closest('.card')) {
            collapseAll();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const expanded = grid.querySelector('.card.expanded');
            if (expanded) {
                collapseAll();
            }
        }
    });
});
