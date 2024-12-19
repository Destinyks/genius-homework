import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../theme_provider.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({Key? key}) : super(key: key);

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  bool _isSoundOn = true;
  bool _isMusicOn = true;
  String _selectedLanguage = 'English';

  final List<String> _languages = [
    'Русский',
    'English',
    'Español',
    'Український'
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Настройки'),
      ),
      body: ListView(
        children: [
          SwitchListTile(
            title: const Text('Тёмная тема'),
            value: Provider.of<ThemeProvider>(context).themeData.brightness ==
                Brightness.dark,
            onChanged: (bool value) {
              Provider.of<ThemeProvider>(context, listen: false).toggleTheme();
            },
          ),
          SwitchListTile(
            title: const Text('Music'),
            subtitle: const Text('on/off'),
            value: _isMusicOn,
            onChanged: (bool value) {
              setState(() {
                _isMusicOn = value;
              });
            },
          ),
          ListTile(
            title: const Text('Language'),
            subtitle: Text(_selectedLanguage),
            trailing: const Icon(Icons.arrow_forward_ios),
            onTap: () async {
              final selected = await _showLanguageDialog();
              if (selected != null) {
                setState(() {
                  _selectedLanguage = selected;
                });
              }
            },
          ),
        ],
      ),
    );
  }

  Future<String?> _showLanguageDialog() async {
    return showDialog<String>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: SizedBox(
            width: double.maxFinite,
            child: ListView.builder(
              shrinkWrap: true,
              itemCount: _languages.length,
              itemBuilder: (context, index) {
                final language = _languages[index];
                return ListTile(
                  title: Text(language),
                  onTap: () {
                    Navigator.pop(context, language);
                  },
                );
              },
            ),
          ),
        );
      },
    );
  }
}
