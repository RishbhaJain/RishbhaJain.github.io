# Image drop zone

The final project images use these filenames:

- `portrait-close.jpg` — close-up / wide portrait
- `portrait-zoom.jpg` — stepped-back / zoomed portrait
- `architecture-zoom.jpg` — distant / zoomed architectural scene
- `architecture-wide.jpg` — nearby / unzoomed architectural scene
- `dolly-zoom.gif` — animated dolly zoom

Source mapping:

- `IMG_5989.HEIC` → `portrait-close.jpg`
- `IMG_5990.HEIC` → `portrait-zoom.jpg`
- `IMG_6021.HEIC` → `architecture-zoom.jpg`
- `IMG_6020.HEIC` → `architecture-wide.jpg`
- `IMG_5997.HEIC` through `IMG_6007.HEIC` → `dolly-zoom.gif`

The HEIC stills were decoded with macOS's native image pipeline, converted to
1800 × 2400 JPEGs, and saved without embedded location metadata. The GIF is a
540 × 720 ping-pong loop assembled from the ten supplied frames.
