export default function(h, {
	listeners,
	parent,
	props,
}) {
	return h(
		'VBtn',
		{
			class: 'ma-1',
			props: {
				disabled: parent.disabled,
				text: true,
				icon: true,
			},
			on: listeners,
		},
		[h(
			'VIcon',
			{
				style: props.iconStyle,
			},
			props.icon,
		)],
	);
}
