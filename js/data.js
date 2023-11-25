
    

    
    
    
    
     //ランダムに質問事項を形成 
    $(document).ready(function() {
        // 質問を表示する関数
        function showRandomQuestion() {
            const questions = [
                "部署の雰囲気について",
                "残業のリアルは？",
                "昇給どんな感じ？",
                "あなたの今の部署での目標は？",
            
                "１週間前とかでも有給取りやすい？"
                // 追加の質問を必要に応じてここに追加
            ];

            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            $('#text').val(randomQuestion);
        }

        // 本文フォームに特定の値を入力するとランダムに質問を表示
        $('#text').on('input', function () {
            const inputValue = $(this).val();
            const triggerValue = 'おだ';

            if (inputValue.trim() === triggerValue) {
                showRandomQuestion();
            }
        });
    });






        
