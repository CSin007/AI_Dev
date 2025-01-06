import cv2

# Load an image
img = cv2.imread('images.jpg')

# Display the image
cv2.imshow('Image', img)

# Wait for a key press and close the window
cv2.waitKey(0)
cv2.destroyAllWindows()
