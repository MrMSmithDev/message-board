const generateAvatar = require("generate-avatar");

const sampleMessages = [
  {
    author: "JohnDoe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar_svg: generateAvatar.generateFromString("JohnDoe"),
  },
  {
    author: "JaneSmith",
    message:
      "Suspendisse in est ante in nibh mauris cursus. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.",
    avatar_svg: generateAvatar.generateFromString("JaneSmith"),
  },
  {
    author: "MarkJohnson",
    message:
      "Viverra nibh cras pulvinar mattis nunc. Eu mi bibendum neque egestas congue quisque egestas diam.",
    avatar_svg: generateAvatar.generateFromString("MarkJohnson"),
  },
  {
    author: "EmilyBrown",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam. Nec sagittis aliquam malesuada bibendum arcu.",
    avatar_svg: generateAvatar.generateFromString("EmilyBrown"),
  },
  {
    author: "ChrisLee",
    message:
      "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Sed viverra ipsum nunc aliquet bibendum enim.",
    avatar_svg: generateAvatar.generateFromString("ChrisLess"),
  },
  {
    author: "SarahTaylor",
    message:
      "Vulputate mi sit amet mauris commodo quis. Commodo elit at imperdiet dui accumsan sit amet.",
    avatar_svg: generateAvatar.generateFromString("SarahTaylor"),
  },
  {
    author: "DavidClark",
    message:
      "Felis imperdiet proin fermentum leo vel orci porta. Ut sem viverra aliquet eget sit amet.",
    avatar_svg: generateAvatar.generateFromString("DavidClark"),
  },
  {
    author: "AnnaWang",
    message:
      "Duis at consectetur lorem donec massa sapien faucibus et. Id neque aliquam vestibulum morbi blandit cursus.",
    avatar_svg: generateAvatar.generateFromString("AnnaWang"),
  },
  {
    author: "MichaelWilson",
    message:
      "Dignissim sodales ut eu sem integer vitae justo eget. Sem nulla pharetra diam sit amet nisl suscipit.",
    avatar_svg: generateAvatar.generateFromString("MichaelWilson"),
  },
  {
    author: "AmandaMartinez",
    message:
      "Viverra nam libero justo laoreet sit amet cursus sit amet. Sapien nec sagittis aliquam malesuada.",
    avatar_svg: generateAvatar.generateFromString("AmandaMartinez"),
  },
  {
    author: "AlexMiller",
    message:
      "Nibh ipsum consequat nisl vel pretium lectus quam id. Quam nulla porttitor massa id neque aliquam vestibulum morbi.",
    avatar_svg: generateAvatar.generateFromString("AlexMiller"),
  },
  {
    author: "JessicaYoung",
    message:
      "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tincidunt eget nullam non nisi est sit amet.",
    avatar_svg: generateAvatar.generateFromString("JessicaYoung"),
  },
  {
    author: "DanielBrown",
    message:
      "Eu ultrices vitae auctor eu augue ut lectus. Volutpat ac tincidunt vitae semper quis lectus nulla.",
    avatar_svg: generateAvatar.generateFromString("Danielbrown"),
  },
  {
    author: "OliviaGarcia",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
    avatar_svg: generateAvatar.generateFromString("OliviaGarcia"),
  },
  {
    author: "JustinThomas",
    message:
      "Lectus nulla at volutpat diam ut venenatis. Massa tincidunt nunc pulvinar sapien et ligula.",
    avatar_svg: generateAvatar.generateFromString("JustinThomas"),
  },
  {
    author: "GraceRodriguez",
    message:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mattis pellentesque id nibh tortor id aliquet.",
    avatar_svg: generateAvatar.generateFromString("GraceRodriguez"),
  },
  {
    author: "EthanLopez",
    message:
      "Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam vel quam elementum pulvinar etiam non quam.",
    avatar_svg: generateAvatar.generateFromString("EthanLopez"),
  },
  {
    author: "SophiaHernandez",
    message:
      "Lacinia at quis risus sed vulputate odio ut. Ornare quam viverra orci sagittis eu volutpat.",
    avatar_svg: generateAvatar.generateFromString("SophiaHernandez"),
  },
  {
    author: "JamesGonzalez",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
    avatar_svg: generateAvatar.generateFromString("JamesGonzalez"),
  },
  {
    author: "LilyParker",
    message:
      "Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Est ante in nibh mauris cursus mattis molestie a.",
    avatar_svg: generateAvatar.generateFromString("LilyParker"),
  },
  {
    author: "SamuelBrown",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar_svg: generateAvatar.generateFromString("SamuelBrown"),
  },
  {
    author: "MichelleWilson",
    message:
      "Suspendisse in est ante in nibh mauris cursus. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.",
    avatar_svg: generateAvatar.generateFromString("MichelleWilson"),
  },
  {
    author: "RobertLee",
    message:
      "Viverra nibh cras pulvinar mattis nunc. Eu mi bibendum neque egestas congue quisque egestas diam.",
    avatar_svg: generateAvatar.generateFromString("RobertLee"),
  },
  {
    author: "JessicaTaylor",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam. Nec sagittis aliquam malesuada bibendum arcu.",
    avatar_svg: generateAvatar.generateFromString("JessicaTaylor"),
  },
  {
    author: "BenjaminMiller",
    message:
      "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Sed viverra ipsum nunc aliquet bibendum enim.",
    avatar_svg: generateAvatar.generateFromString("BenjaminMiller"),
  },
  {
    author: "SophieHarris",
    message:
      "Vulputate mi sit amet mauris commodo quis. Commodo elit at imperdiet dui accumsan sit amet.",
    avatar_svg: generateAvatar.generateFromString("SophieHarris"),
  },
  {
    author: "DavidClarkson",
    message:
      "Felis imperdiet proin fermentum leo vel orci porta. Ut sem viverra aliquet eget sit amet.",
    avatar_svg: generateAvatar.generateFromString("DavidClarkson"),
  },
  {
    author: "OliverSmith",
    message:
      "Duis at consectetur lorem donec massa sapien faucibus et. Id neque aliquam vestibulum morbi blandit cursus.",
    avatar_svg: generateAvatar.generateFromString("OliverSmith"),
  },
  {
    author: "LucyJohnson",
    message:
      "Dignissim sodales ut eu sem integer vitae justo eget. Sem nulla pharetra diam sit amet nisl suscipit.",
    avatar_svg: generateAvatar.generateFromString("LucyJohnson"),
  },
  {
    author: "ConnorDavis",
    message:
      "Viverra nam libero justo laoreet sit amet cursus sit amet. Sapien nec sagittis aliquam malesuada.",
    avatar_svg: generateAvatar.generateFromString("ConnorDavis"),
  },
  {
    author: "EmmaAnderson",
    message:
      "Nibh ipsum consequat nisl vel pretium lectus quam id. Quam nulla porttitor massa id neque aliquam vestibulum morbi.",
    avatar_svg: generateAvatar.generateFromString("EmmaAnderson"),
  },
  {
    author: "WilliamWilson",
    message:
      "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tincidunt eget nullam non nisi est sit amet.",
    avatar_svg: generateAvatar.generateFromString("WilliamWilson"),
  },
  {
    author: "IsabellaTaylor",
    message:
      "Eu ultrices vitae auctor eu augue ut lectus. Volutpat ac tincidunt vitae semper quis lectus nulla.",
    avatar_svg: generateAvatar.generateFromString("IsabellaTaylor"),
  },
  {
    author: "NoahJones",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
    avatar_svg: generateAvatar.generateFromString("NoahJones"),
  },
  {
    author: "CharlotteBrown",
    message:
      "Lectus nulla at volutpat diam ut venenatis. Massa tincidunt nunc pulvinar sapien et ligula.",
    avatar_svg: generateAvatar.generateFromString("CharlotteBrown"),
  },
  {
    author: "MiaMartinez",
    message:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mattis pellentesque id nibh tortor id aliquet.",
    avatar_svg: generateAvatar.generateFromString("MiaMartinez"),
  },
  {
    author: "JamesRobinson",
    message:
      "Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam vel quam elementum pulvinar etiam non quam.",
    avatar_svg: generateAvatar.generateFromString("JamesRobinson"),
  },
  {
    author: "AmeliaWhite",
    message:
      "Lacinia at quis risus sed vulputate odio ut. Ornare quam viverra orci sagittis eu volutpat.",
    avatar_svg: generateAvatar.generateFromString("AmeliaWhite"),
  },
  {
    author: "ElijahHernandez",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
    avatar_svg: generateAvatar.generateFromString("ElijahHernandez"),
  },
  {
    author: "HarperLopez",
    message:
      "Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Est ante in nibh mauris cursus mattis molestie a.",
    avatar_svg: generateAvatar.generateFromString("HerperLopez"),
  },
];

module.exports = sampleMessages;
