huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.readeBox(1, Content1.xCenter) > 80 && huskylens.readeBox(1, Content1.xCenter) < 240) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    } else if (huskylens.readeBox(1, Content1.xCenter) < 241) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    } else if (huskylens.readeBox(1, Content1.xCenter) > 79) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
