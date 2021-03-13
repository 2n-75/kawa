/**
 * 間隔の平均値を求める
 * @param array x座標の配列
 * @returns number 平均値
 */
export const average = (array: number[]) => {
  // 小さい順に並べる
  const sortAry = array.sort((a, b) => a - b)

  // それぞれの間隔を求める
  const distanceAry: number[] = []
  sortAry.forEach((xOffset, index) => {
    if (index === 4) {
      return
    }
    const distance = sortAry[index + 1] - sortAry[index]
    distanceAry.push(distance)
  })

  // 間隔の平均値を出す
  const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue
  const sum = distanceAry.reduce(reducer)
  console.log(sum)

  return Math.floor(sum / distanceAry.length)
}
