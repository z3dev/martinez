import tap from 'tape'
import SweepEvent from '../src/sweep_event'

tap.test('sweep event', (main) => {
  main.test('isBelow', (t) => {
    const s1 = new SweepEvent([0, 0], true, new SweepEvent([1, 1], false))
    const s2 = new SweepEvent([0, 1], false, new SweepEvent([0, 0], false))

    t.ok(s1.isBelow([0, 1]))
    t.ok(s1.isBelow([1, 2]))
    t.notOk(s1.isBelow([0, 0]))
    t.notOk(s1.isBelow([5, -1]))

    t.notOk(s2.isBelow([0, 1]))
    t.notOk(s2.isBelow([1, 2]))
    t.notOk(s2.isBelow([0, 0]))
    t.notOk(s2.isBelow([5, -1]))

    t.end()
  })

  main.test('isAbove', (t) => {
    const s1 = new SweepEvent([0, 0], true, new SweepEvent([1, 1], false))
    const s2 = new SweepEvent([0, 1], false, new SweepEvent([0, 0], false))

    t.notOk(s1.isAbove([0, 1]))
    t.notOk(s1.isAbove([1, 2]))
    t.ok(s1.isAbove([0, 0]))
    t.ok(s1.isAbove([5, -1]))

    t.ok(s2.isAbove([0, 1]))
    t.ok(s2.isAbove([1, 2]))
    t.ok(s2.isAbove([0, 0]))
    t.ok(s2.isAbove([5, -1]))

    t.end()
  })

  main.test('isVertical', (t) => {
    t.ok(new SweepEvent([0, 0], true, new SweepEvent([0, 1], false)).isVertical())
    t.notOk(new SweepEvent([0, 0], true, new SweepEvent([0.0001, 1], false)).isVertical())

    t.end()
  })

  main.end()
})
