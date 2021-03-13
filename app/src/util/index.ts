/**
 * 間隔の平均値を求める
 * @param array x座標の配列
 * @returns number 平均値
 */
export const average = (array: number[]) => {
  const correctAverage = getCorrectAverage()

  // 小さい順に並べる
  const sortAry = array.sort((a, b) => a - b)

  // それぞれの間隔を求める
  const distanceAry: number[] = []
  sortAry.forEach((xOffset, index) => {
    let distance = 0
    if (index === 0) {

      distance = sortAry[index] - 0
    } else if (index === sortAry.length - 1) {
      const wrapper = document.getElementById('wrapper')
      const width = wrapper?.clientWidth
      distance = width ? width - sortAry[index] : 10000
    } else {
      distance = sortAry[index] - sortAry[index - 1]
    }
    distanceAry.push(Math.abs(correctAverage - distance))
  })

  // 間隔の平均値を出す
  const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue
  const sum = distanceAry.reduce(reducer)

  return Math.floor(sum / distanceAry.length)
}

export const getCorrectAverage = () => {
  const wrapper = document.getElementById('wrapper')
  const width = wrapper?.clientWidth

  return width ? Math.floor(width / 7) : 0
}
