入力フォームひな型の流れ

1.index.htmlで人数を選択後，変数「numberOfPerson」に記録しwebストレージのlocalstorageに持たせる

2.config.htmlでwebストレージから「numberOfPerson」を呼び出して人数分の入力フォームを作成し，名前と性別を変数「nameList」「sexList」に記録してwebストレージのlocalstorageに持たせる

3.result.htmlで「nameList」「sexList」を呼び出し，配列の形にしてから，consoleに出力