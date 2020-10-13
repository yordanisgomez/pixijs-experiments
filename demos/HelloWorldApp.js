const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('cat.png');

//create a sprite
const sprite = new PIXI.Sprite(texture);
sprite.anchor.set(0.5);

//add the sprite to the container
container.addChild(sprite);


// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});
