const SAVE_DRAWING = 'SAVE_DRAWING';

export const saveDrawing = drawing => ({
    type: SAVE_DRAWING,
    drawing
});