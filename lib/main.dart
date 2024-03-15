import 'package:flutter/material.dart';
import 'package:panorama_viewer/panorama_viewer%20copy.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PanoramaViewer(
        child: Image.asset('assets/images/carlsbad_nps.jpg'),
      ),
    );
  }
}
