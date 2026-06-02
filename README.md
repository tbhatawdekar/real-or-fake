# Real or Fake

`Real or Fake` is a lightweight deepfake detector browser game, made for my CSE 480 final project, where players guess whether each image is a real photo or AI-generated. All images used were sourced from the following dataset: https://www.kaggle.com/datasets/prithivsakthiur/deepfake-vs-real-20k

<img width="570" height="387" alt="image" src="https://github.com/user-attachments/assets/489c6487-92cb-4c58-b360-a024b22640e0" />

## Setup

This project is plain HTML/CSS/JavaScript, so there is no install step.

1. From the project folder, start a local server:

```bash
python3 -m http.server 8000
```

2. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Gameplay

- Click **Real** or **Fake** for the current image.
- You get immediate feedback and a running score.
- Images are shuffled and loop continuously.
