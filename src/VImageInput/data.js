export default function() {
	return {
		dirtyOriginLeft: 1/2,
		dirtyOriginTop: 1/2,
		dirtyScaling: 0,
		flippedHorizontally: false,
		flippedVertically: false,
		imageData: null,
		internalImageData: null,
		internalImageHeight: 0,
		internalImageWidth: 0,
		rotated: false,
    //
    legend: [
      { icon: 'mdi-pan-horizontal', color: 'primary', description: 'Zoom' },
      { icon: 'mdi-flip-vertical', description: 'Întoarce pe verticală' },
      { icon: 'mdi-flip-horizontal', description: 'Întoarce pe orizontală' },
      { icon: 'mdi-rotate-left', description: 'Rotește la stânga' },
      { icon: 'mdi-rotate-right', description: 'Rotește la dreapta' },
      { icon: 'mdi-image-remove', description: 'Șterge imagine și încarcă alta' },
    ],
    legendShown: false,
	};
}
