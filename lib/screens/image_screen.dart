import 'package:flutter/material.dart';
import 'package:panorama_viewer/panorama_viewer%20copy.dart';

class ImageScreen extends StatelessWidget {
  final Image image;
  const ImageScreen(this.image, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: PanoramaViewer(
        child: image,
      ),
    );
  }
}
