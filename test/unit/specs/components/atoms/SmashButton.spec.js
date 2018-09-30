import { mount } from '@vue/test-utils'
import SmashButton from '@/components/atoms/SmashButton.vue'

describe('SmashButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('smash-buttonクラスを持つボタンで構成されていること', () => {
          const button = mount(SmashButton)

          expect(button.is('button')).toBe(true)
          expect(button.classes()).toContain('smash-button')
        })
      })
    })
  })
})
