import {
  reactive
} from 'vue'
export const options = reactive([{
  icon: 'shop',
  text: '店铺'
}, {
  icon: 'cart',
  text: '购物车',
  info: 2
}])
export const buttonGroup = reactive([{
  text: '加入购物车',
  backgroundColor: '#ff0000',
  color: '#fff'
}, {
  text: '立即购买',
  backgroundColor: '#ffa200',
  color: '#fff'
}])
