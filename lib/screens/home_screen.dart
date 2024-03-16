import 'package:dot_guide_pano/components/thumbnail.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: ListView(
          children: const [
            Thumbnail('assets/images/balcony_water.jpg'),
            Thumbnail('assets/images/boat.jpg'),
            Thumbnail('assets/images/carlsbad_nps.jpg'),
            Thumbnail('assets/images/carlsbad.jpg'),
            Thumbnail('assets/images/dock.jpg'),
            Thumbnail('assets/images/game_world.jpeg'),
            Thumbnail('assets/images/lagoon.jpg'),
            Thumbnail('assets/images/mountain.jpg'),
            Thumbnail('assets/images/planet.jpeg'),
            Thumbnail('assets/images/room.jpeg'),
            Thumbnail('assets/images/trees.jpeg'),
            Thumbnail('assets/images/bunker.jpeg'),
            Thumbnail('assets/images/grocery.jpeg'),
          ],
        ),
      ),
    );
  }
}
