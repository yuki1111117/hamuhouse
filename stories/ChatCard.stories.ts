import { storiesOf } from '@storybook/vue'
import Card from '@/components/cards/ChatCard.vue'

storiesOf('Vuetify Components', module).add('Card', () => ({
  components: { Card },
  template: `
<div>
<Card :item="value" :index="i"></Card>
</div>
`,
}))
