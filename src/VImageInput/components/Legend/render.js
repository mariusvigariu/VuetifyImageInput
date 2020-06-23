import { VCard, VChip, VIcon } from 'vuetify/lib'

export default function(h, { parent }) {
  const children = []

  for (const item of parent.legend) {
    children.push(
      h(
        'div',
        {
          class: 'pb-2',
        },
        [
          h(
            VIcon,
            {
              props: {
                left: true,
                color: item.color,
              }
            },
            item.icon,
          ),
          h('span', item.description),
        ],
      )
    )
  }

	return h(
    VCard,
    {
      class: 'mx-2 px-2 pt-2',
      props: {
        width: 300,
      },
    },
    children
  )
}
