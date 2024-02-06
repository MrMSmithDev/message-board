const sampleMessages = [
  {
    author: "JohnDoe",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    author: "JaneSmith",
    message:
      "Suspendisse in est ante in nibh mauris cursus. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.",
  },
  {
    author: "MarkJohnson",
    message:
      "Viverra nibh cras pulvinar mattis nunc. Eu mi bibendum neque egestas congue quisque egestas diam.",
  },
  {
    author: "EmilyBrown",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam. Nec sagittis aliquam malesuada bibendum arcu.",
  },
  {
    author: "ChrisLee",
    message:
      "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Sed viverra ipsum nunc aliquet bibendum enim.",
  },
  {
    author: "SarahTaylor",
    message:
      "Vulputate mi sit amet mauris commodo quis. Commodo elit at imperdiet dui accumsan sit amet.",
  },
  {
    author: "DavidClark",
    message:
      "Felis imperdiet proin fermentum leo vel orci porta. Ut sem viverra aliquet eget sit amet.",
  },
  {
    author: "AnnaWang",
    message:
      "Duis at consectetur lorem donec massa sapien faucibus et. Id neque aliquam vestibulum morbi blandit cursus.",
  },
  {
    author: "MichaelWilson",
    message:
      "Dignissim sodales ut eu sem integer vitae justo eget. Sem nulla pharetra diam sit amet nisl suscipit.",
  },
  {
    author: "AmandaMartinez",
    message:
      "Viverra nam libero justo laoreet sit amet cursus sit amet. Sapien nec sagittis aliquam malesuada.",
  },
  {
    author: "AlexMiller",
    message:
      "Nibh ipsum consequat nisl vel pretium lectus quam id. Quam nulla porttitor massa id neque aliquam vestibulum morbi.",
  },
  {
    author: "JessicaYoung",
    message:
      "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tincidunt eget nullam non nisi est sit amet.",
  },
  {
    author: "DanielBrown",
    message:
      "Eu ultrices vitae auctor eu augue ut lectus. Volutpat ac tincidunt vitae semper quis lectus nulla.",
  },
  {
    author: "OliviaGarcia",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
  },
  {
    author: "JustinThomas",
    message:
      "Lectus nulla at volutpat diam ut venenatis. Massa tincidunt nunc pulvinar sapien et ligula.",
  },
  {
    author: "GraceRodriguez",
    message:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mattis pellentesque id nibh tortor id aliquet.",
  },
  {
    author: "EthanLopez",
    message:
      "Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam vel quam elementum pulvinar etiam non quam.",
  },
  {
    author: "SophiaHernandez",
    message:
      "Lacinia at quis risus sed vulputate odio ut. Ornare quam viverra orci sagittis eu volutpat.",
  },
  {
    author: "JamesGonzalez",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
  },
  {
    author: "LilyParker",
    message:
      "Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Est ante in nibh mauris cursus mattis molestie a.",
  },
  {
    author: "SamuelBrown",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    author: "MichelleWilson",
    message:
      "Suspendisse in est ante in nibh mauris cursus. Gravida quis blandit turpis cursus in hac habitasse platea dictumst.",
  },
  {
    author: "RobertLee",
    message:
      "Viverra nibh cras pulvinar mattis nunc. Eu mi bibendum neque egestas congue quisque egestas diam.",
  },
  {
    author: "JessicaTaylor",
    message:
      "Fringilla est ullamcorper eget nulla facilisi etiam. Nec sagittis aliquam malesuada bibendum arcu.",
  },
  {
    author: "BenjaminMiller",
    message:
      "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Sed viverra ipsum nunc aliquet bibendum enim.",
  },
  {
    author: "SophieHarris",
    message:
      "Vulputate mi sit amet mauris commodo quis. Commodo elit at imperdiet dui accumsan sit amet.",
  },
  {
    author: "DavidClarkson",
    message:
      "Felis imperdiet proin fermentum leo vel orci porta. Ut sem viverra aliquet eget sit amet.",
  },
  {
    author: "OliverSmith",
    message:
      "Duis at consectetur lorem donec massa sapien faucibus et. Id neque aliquam vestibulum morbi blandit cursus.",
  },
  {
    author: "LucyJohnson",
    message:
      "Dignissim sodales ut eu sem integer vitae justo eget. Sem nulla pharetra diam sit amet nisl suscipit.",
  },
  {
    author: "ConnorDavis",
    message:
      "Viverra nam libero justo laoreet sit amet cursus sit amet. Sapien nec sagittis aliquam malesuada.",
  },
  {
    author: "EmmaAnderson",
    message:
      "Nibh ipsum consequat nisl vel pretium lectus quam id. Quam nulla porttitor massa id neque aliquam vestibulum morbi.",
  },
  {
    author: "WilliamWilson",
    message:
      "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tincidunt eget nullam non nisi est sit amet.",
  },
  {
    author: "IsabellaTaylor",
    message:
      "Eu ultrices vitae auctor eu augue ut lectus. Volutpat ac tincidunt vitae semper quis lectus nulla.",
  },
  {
    author: "NoahJones",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
  },
  {
    author: "CharlotteBrown",
    message:
      "Lectus nulla at volutpat diam ut venenatis. Massa tincidunt nunc pulvinar sapien et ligula.",
  },
  {
    author: "MiaMartinez",
    message:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Mattis pellentesque id nibh tortor id aliquet.",
  },
  {
    author: "JamesRobinson",
    message:
      "Volutpat maecenas volutpat blandit aliquam etiam erat velit. Diam vel quam elementum pulvinar etiam non quam.",
  },
  {
    author: "AmeliaWhite",
    message:
      "Lacinia at quis risus sed vulputate odio ut. Ornare quam viverra orci sagittis eu volutpat.",
  },
  {
    author: "ElijahHernandez",
    message:
      "Porttitor eget dolor morbi non arcu risus quis varius. Feugiat in ante metus dictum at tempor commodo ullamcorper.",
  },
  {
    author: "HarperLopez",
    message:
      "Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Est ante in nibh mauris cursus mattis molestie a.",
  },
];

module.exports = sampleMessages;
