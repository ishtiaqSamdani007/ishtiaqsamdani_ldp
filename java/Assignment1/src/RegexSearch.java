import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class RegexSearch {
    public boolean Regex(String text,String pattern){
        Pattern regexP = Pattern.compile(text,Pattern.CASE_INSENSITIVE);
        Matcher regexM = regexP.matcher(pattern);
        return regexM.find();
    }
    public boolean RegexSen(String text,String pattern){
        Pattern regexP = Pattern.compile(text);
        Matcher regexM = regexP.matcher(pattern);
        return regexM.find();
    }
}
