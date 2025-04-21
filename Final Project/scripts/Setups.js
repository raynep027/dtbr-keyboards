//June 2, 2024

"use strict"

let lstSetups;
let curSlide = 0;

class Setup {
    keyboard;
    keyboardDesc;
    keyboardImg;
    mouse;
    mouseDesc;
    mouseImg;

    constructor(keyboard, keyboardDesc, keyboardImg, mouse, mouseDesc, mouseImg) {
        this.keyboard = keyboard;
        this.keyboardDesc = keyboardDesc;
        this.keyboardImg = keyboardImg;
        this.mouse = mouse;
        this.mouseDesc = mouseDesc;
        this.mouseImg = mouseImg;
    }

    showInfo(keyboardId, keyboardDescId, keyboardImgId, mouseId, mouseDescId, mouseImgId) {
        document.getElementById(keyboardId).innerText = this.keyboard;
        document.getElementById(keyboardDescId).innerText = this.keyboardDesc;
        document.getElementById(keyboardImgId).src = `../images/${this.keyboardImg}`;
        document.getElementById(mouseId).innerText = this.mouse;
        document.getElementById(mouseDescId).innerText = this.mouseDesc;
        document.getElementById(mouseImgId).src = `../images/${this.mouseImg}`;
    }
}

let obRayne = new Setup("Keychron Q3",
    "A TKL layout full aluminum mechanical keyboard&nbsp; with gasket mount design, hot-swappable, CNC " +
    "aluminum case, QMK/VIA support and more.","Keychron Q3 Pro Wireless Custom Mechanical Keyboard.jpg",
    "Logitech G203",
    "Make the most of play time with G203—a gaming mouse in a variety of vibrant colors. With LIGHTSYNC " +
    "technology, a gaming-grade sensor and a classic 6-button design, you’ll light up your game and your desk",
    "g203.jpg");

let obBrody = new Setup("Razer Ornata V3",
    "Meet the Razer Ornata V3—a low-profile ergonomic gaming keyboard powered by Razer Chroma™ RGB. Sporting a new " +
    "ultra-slim form factor, more durable keycaps, and unique mecha-membrane switches, enhance your work and play with " +
    "a hybrid keyboard that combines the best of both worlds.",
    "RazerOrnataV3Keyboard.jpg",
    "Razer Naga Pro",
    "Designed to dominate in MMO, Battle Royale, FPS, and more, the multi-genre master returns stronger than " +
    "ever. With 3 swappable side plates, 19+1 programmable buttons, a Razer HyperScroll Pro Wheel, and Razer HyperSpeed " +
    "Wireless, the Razer Naga V2 Pro packs the power to rise above every genre.",
    "RazerNagaPro.jpg");

let obTerrel = new Setup("EagleTec KG060-BR",
    "MECHANICAL GAMING KEYBOARD BLACK VERSION; 87 Keys Compact Low Profile Mechanical Gaming Keyboard with " +
    "Custom Mechanical Feeling Keyboard Switches. Designed for longevity with greater durability and responsiveness. " +
    "The Mechanical Keyboard Quiet Keys offer medium resistance, crisp but a quieter click sound, and precise tactile " +
    "feedback for ultimate typing and gaming performance. The switches are of the highest quality, tested for 50 million " +
    "keystrokes",
    "EagleTec.jpg",
    "Logitech G Pro Wireless",
    "Logitech G collaborated with more than 50 pro players to find the perfect shape, weight and feel combined " +
    "with LIGHTSPEED wireless and HERO 25K sensor. The result: is one of the most popular mice in esports.",
    "LogitechGPro.png");

let obDenali = new Setup("Redragon K599",
    "Redragon K599 wireless keyboard adopts innovative 2.4G anti-interference technology, which reduces the " +
    "input delay of the keyboard, whether it is office or game, it can be an efficient, stable, and fast response. Up to " +
    "60 hours battery life with LED off and 30 hours with LED on, This wireless keyboard can set up wirelessly with an " +
    "included dongle. Switch to a wired connection with a type-c cable.",
    "Redragon K599.jpg",
    "Logitech G Pro Wireless",
    "Logitech G collaborated with more than 50 pro players to find the perfect shape, weight and feel combined " +
    "with LIGHTSPEED wireless and HERO 25K sensor. The result: is one of the most popular mice in esports.",
    "LogitechGPro.png");

let obZac = new Setup("NZXT Function",
    "For those who desire a full-size keyboard without a large footprint, the NZXT Function Full Keyboard " +
    "packs 104 keys into the sleekest form possible.\n" +
    "\n" +
    "MX compatible 5-pin hot-swappable sockets for changing out mechanical switches\n" +
    "Standard bottom row design enables installation of any standard aftermarket keycaps\n" +
    "Durable aluminum top plate with a low-profile, minimalist design\n" +
    "CAM-powered and easy-to-customize per-key RGB, macro control, and lighting effects with four onboard profiles\n" +
    "Removable USB-C cable – ready for customized cables",
    "NZXT Function.jpg",
    "Razer Basilisk V3",
    "Create, control, and champion your playstyle with the new Razer Basilisk V3—the quintessential ergonomic " +
    "gaming mouse for customized performance. With 10+1 programmable buttons, an intelligent scroll wheel, and a heavy " +
    "dose of Razer Chroma™ RGB, it's time to light up the competition your way.",
    "RazerBasiliskV3.jpg");

lstSetups = [obRayne,obBrody,obTerrel,obDenali,obZac];

window.onload = () => {
    lstSetups[curSlide].showInfo("p1Name","p1Desc","p1Img",
        "p2Name","p2Desc","p2Img");

    $('#productCarousel').on('slide.bs.carousel', function(event) {
        increment();
    });

    $('#productCarousel').on('slide.bs.carousel', function(event) {
        decrement();
    });

    $('.carousel-control-prev').click(function() {
        decrement();
    });

    $('.carousel-control-next').click(function() {
        increment();
    });
}

function increment() {
    curSlide = curSlide + 1 < lstSetups.length ? curSlide + 1 : 0;
    lstSetups[curSlide].showInfo("p1Name","p1Desc","p1Img",
        "p2Name","p2Desc","p2Img");
}

function decrement() {
    curSlide = curSlide - 1 >= 0 ? curSlide - 1 : lstSetups.length-1;
    lstSetups[curSlide].showInfo("p1Name","p1Desc","p1Img",
        "p2Name","p2Desc","p2Img");
}