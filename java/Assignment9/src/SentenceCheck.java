import java.util.regex.Pattern;

public class SentenceCheck {
    public static void main(String[] args) {
        String sentence1 = "I am Iron Man.";
        String sentence2 = "I am Iron man";
        String sentence3 = "i am Iron man";
        String sentence4 = "I am Tony Stark.";
        String regex = "[A-Z].*\\.$";
        Pattern pattern = Pattern.compile(regex);
        System.out.println(sentence1 + ": " + pattern.matcher(sentence1).matches());
        System.out.println(sentence2 + ": " + pattern.matcher(sentence2).matches());
        System.out.println(sentence3 + ": " + pattern.matcher(sentence3).matches());
        System.out.println(sentence4 + ": " + pattern.matcher(sentence4).matches());
    }
}
