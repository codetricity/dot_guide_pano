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
      const Thumbnail('assets/images/balcony_water.jpg'),
      const Thumbnail('assets/images/boat.jpg'),
      const Thumbnail('assets/images/carlsbad_nps.jpg'),
      const Thumbnail('assets/images/carlsbad.jpg'),
      const Thumbnail('assets/images/dock.jpg'),
      const Thumbnail('assets/images/game_world.jpeg'),
      const Thumbnail('assets/images/lagoon.jpg'),
      const Thumbnail('assets/images/mountain.jpg'),
      const Thumbnail('assets/images/planet.jpeg'),
      const Thumbnail('assets/images/room.jpeg'),
      const Thumbnail('assets/images/trees.jpeg'),
      const Thumbnail('assets/images/bunker.jpeg'),
      const Thumbnail('assets/images/grocery.jpeg'),
    ];
    return Scaffold(
      body: SafeArea(
        child: kIsWeb
            ? GridView(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 3, crossAxisSpacing: 10.0),
                children: thumbList,
              )
            : ListView(
                children: thumbList,
              ),
      ),
    );
  }
}
