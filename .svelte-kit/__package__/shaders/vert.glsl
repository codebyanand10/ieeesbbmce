void main() {
    // Stuff to do
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
