import 'package:dot_guide_pano/screens/image_screen.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class Thumbnail extends StatelessWidget {
  final String imagePath;
  const Thumbnail(this.imagePath, {super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    double thumbWidth = screenWidth;
    if (kIsWeb) {
      thumbWidth = screenWidth / 3 - 20;
    }
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 3.0),
      child: InkWell(
        child: Image.asset(
          imagePath,
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
