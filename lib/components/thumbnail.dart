import 'package:dot_guide_pano/screens/image_screen.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class Thumbnail extends StatelessWidget {
  final String imagePath;
  final String thumbPath;
  const Thumbnail(
      {required this.imagePath, required this.thumbPath, super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    double thumbWidth = screenWidth;
    if (kIsWeb) {
      thumbWidth = 300;
    }
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3.0),
      child: InkWell(
        child: Image.asset(
          thumbPath,
          cacheWidth: thumbWidth.toInt(),
          cacheHeight: (thumbWidth ~/ 2),
        ),
        onTap: () {
          // move to image screen
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (context) => ImageScreen(
                Image.asset(imagePath),
              ),
            ),
          );
        },
      ),
    );
  }
}
