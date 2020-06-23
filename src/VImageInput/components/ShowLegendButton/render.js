export default function(h, {parent}) {
	return h(
		'MyActionButton',
		{
			props: {
				icon: parent.showLegendIcon,
				iconStyle: parent.showLegendIconStyle,
			},
			on: {
				click: parent.showLegend,
			},
		},
	);
}
