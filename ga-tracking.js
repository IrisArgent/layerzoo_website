// Google Analytics Tracking for LayerZoo
// Tracking ID: G-Q00T991CHC

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q00T991CHC');

// Automatic event tracking for buttons and downloads
document.addEventListener('click', function(e) {
  const target = e.target.closest('a, button');
  if (!target) return;

  let action = 'click';
  let label = target.textContent.trim() || target.href || 'unknown';

  if (target.hasAttribute('download') || target.href.includes('drive.google.com')) {
    action = 'download';
    label = target.href || 'google-drive';
  } else if (target.classList.contains('button')) {
    label = 'button-' + (target.textContent.trim() || 'cta');
  }

  gtag('event', action, {
    'event_category': 'engagement',
    'event_label': label,
    'transport_method': 'beacon'
  });
});

// Track page views for SPA-like navigation if needed
window.addEventListener('load', function() {
  gtag('event', 'page_view', {
    'page_title': document.title,
    'page_location': window.location.href
  });
});
