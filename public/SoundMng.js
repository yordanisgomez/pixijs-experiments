const SOUND = Object.freeze({
    CLICK: 0,
    SELECT_FOOD: 1,
    BAD_FOOD: 2,
    CONGRATULATION: 4,
    LOSE: 5,
    OVER: 6

})

class SoundMng {
    constructor() {
        this.sounds = {}
    }
    registerSounds(path) {
        this.sounds = {
            [SOUND.CLICK]: new Howl({src: [path+"Sound_Click.mp3"]}),
            [SOUND.SELECT_FOOD]: new Howl({src: [path+"Sound_Select.mp3"]}),
            [SOUND.BAD_FOOD]: new Howl({src: [path+"Sound_Bad.mp3"]}),
            [SOUND.CONGRATULATION]: new Howl({src: [path+"Sound_Congratulation.mp3"]}),
            [SOUND.LOSE]: new Howl({src: [path+"Sound_End.mp3"]}),
            [SOUND.OVER]: new Howl({src: [path+"snd_frame.mp3"]}),
        }
    }
    play(sound) {
        this.sounds[sound].play()
    }
}
