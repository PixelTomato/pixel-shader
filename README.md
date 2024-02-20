# Pixel Shader
A simple project with per-pixel color calculation for fun. A text input is included so custom pixel color equations can be inputted. The letters `x` and `y` can be used to factor in the x and y positions of each pixel.

A live demonstration can be found here: [pixeltomato.github.io/pixel-shader/](pixeltomato.github.io/pixel-shader/).

_WARNING: This project uses an unsanitized text input directly passed into an `eval()` to calculate the color of each pixel based on user input. This project is not intended for any serious use case and is not secure for any such use (any use in this manner is at the user's own risk)._
