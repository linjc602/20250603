function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // 假設有一個 hands 陣列，每個 hand 物件有 keypoints 屬性
  // keypoints 是一個包含21個點的陣列，每個點有 x, y 屬性
  // 這裡用假資料示範
  let hands = [
    {
      keypoints: Array.from({ length: 21 }, (_, i) => ({
        x: 50 + i * 10,
        y: 100 + Math.sin(i) * 30
      }))
    },
    {
      keypoints: Array.from({ length: 21 }, (_, i) => ({
        x: 200 + i * 5,
        y: 200 + Math.cos(i) * 20
      }))
    }
  ];

  // 對每一隻手
  for (let hand of hands) {
    // 0~4
    for (let i = 0; i < 4; i++) {
      let kp1 = hand.keypoints[i];
      let kp2 = hand.keypoints[i + 1];
      line(kp1.x, kp1.y, kp2.x, kp2.y);
    }
    // 5~8
    for (let i = 5; i < 8; i++) {
      let kp1 = hand.keypoints[i];
      let kp2 = hand.keypoints[i + 1];
      line(kp1.x, kp1.y, kp2.x, kp2.y);
    }
    // 9~12
    for (let i = 9; i < 12; i++) {
      let kp1 = hand.keypoints[i];
      let kp2 = hand.keypoints[i + 1];
      line(kp1.x, kp1.y, kp2.x, kp2.y);
    }
    // 13~16
    for (let i = 13; i < 16; i++) {
      let kp1 = hand.keypoints[i];
      let kp2 = hand.keypoints[i + 1];
      line(kp1.x, kp1.y, kp2.x, kp2.y);
    }
    // 17~20
    for (let i = 17; i < 20; i++) {
      let kp1 = hand.keypoints[i];
      let kp2 = hand.keypoints[i + 1];
      line(kp1.x, kp1.y, kp2.x, kp2.y);
    }
  }
}
