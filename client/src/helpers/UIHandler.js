import ZoneHandler from './ZoneHandler';

export default class UIHandler {
    constructor(scene) {

        this.zoneHandler = new ZoneHandler(scene);

        this.buildZones = () => {

            scene.dropZone = this.zoneHandler.renderZone(470, 500);
            this.zoneHandler.renderOutline(scene.dropZone);
        }

        this.buildPlayerAreas = () => {

            scene.playerHandArea = scene.add.rectangle(470, 860, 850, 230);
            scene.playerHandArea.setStrokeStyle(4, 0xff69b4);
            scene.playerDeckArea = scene.add.rectangle(1000, 860, 155, 215);
            scene.playerDeckArea.setStrokeStyle(3, 0x00ffff);
            
            scene.opponentHandArea = scene.add.rectangle(470, 135, 850, 230);
            scene.opponentHandArea.setStrokeStyle(4, 0xff69b4);
            scene.opponentDeckArea = scene.add.rectangle(1000, 135, 155, 215);
            scene.opponentDeckArea.setStrokeStyle(3, 0x00ffff);
            
        }

        this.buildGameText = () => {
            scene.dealCards = scene.add.text(960, 445, "DIJELI CARTE").setFontSize(30).setFontFamily('Trebuchet MS');
        }

        this.buildUI = () => {
            console.log('UIIIIII-----------XCVBNM!');
            this.buildZones();
            this.buildPlayerAreas();
            this.buildGameText();
        }

    }
}