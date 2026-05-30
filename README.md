# Real or Fake

A simple web game where you guess whether an image is real or AI-generated.

## How to play

1. Open `index.html` in your browser (or run a local server).
2. Look at the image and click **Real** (left) or **Fake** (right).
3. Get feedback, then move on to the next image. The game loops through all images in random order.

## Adding images

- Put real photos in the `real/` directory.
- Put AI-generated images in the `fake/` directory.
- Register each new image in the `IMAGES` array in `app.js`.

## Run locally

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000
