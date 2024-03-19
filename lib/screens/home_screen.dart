import 'package:flutter/foundation.dart' show kIsWeb;

import 'package:dot_guide_pano/components/thumbnail.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final List<Thumbnail> thumbList = [
      const Thumbnail(
        imagePath: 'assets/images/balcony_water.jpg',
        thumbPath: 'assets/images/thumbs/balcony_water_thumb.webp',
      ),
      const Thumbnail(
          imagePath: 'assets/images/boat.jpg',
          thumbPath: 'assets/images/thumbs/boat_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/carlsbad_nps.jpg',
          thumbPath: 'assets/images/thumbs/carlsbad_nps_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/carlsbad.jpg',
          thumbPath: 'assets/images/thumbs/carlsbad_thumb.jpg'),
      const Thumbnail(
          imagePath: 'assets/images/dock.jpg',
          thumbPath: 'assets/images/thumbs/dock_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/game_world.jpeg',
          thumbPath: 'assets/images/thumbs/game_world_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/lagoon.jpg',
          thumbPath: 'assets/images/thumbs/lagoon_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/mountain.jpg',
          thumbPath: 'assets/images/thumbs/mountain_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/planet.jpeg',
          thumbPath: 'assets/images/thumbs/planet_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/room.jpeg',
          thumbPath: 'assets/images/thumbs/room_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/trees.jpeg',
          thumbPath: 'assets/images/thumbs/trees_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/bunker.jpeg',
          thumbPath: 'assets/images/thumbs/bunker_thumb.webp'),
      const Thumbnail(
          imagePath: 'assets/images/grocery.jpeg',
          thumbPath: 'assets/images/thumbs/grocery_thumb.webp'),
    ];
    return Scaffold(
      body: SafeArea(
        child: kIsWeb
            ? Padding(
                padding: const EdgeInsets.all(8.0),
                child: GridView(
                  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                      maxCrossAxisExtent: 300,
                      crossAxisSpacing: 10.0,
                      mainAxisSpacing: 10.0,
                      childAspectRatio: 1.5),
                  children: thumbList,
                ),
              )
            : ListView(
                children: thumbList,
              ),
      ),
    );
  }
}
