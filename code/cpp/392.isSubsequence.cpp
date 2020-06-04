class Solution
{
public:
    bool isSubsequence(string s, string t)
    {
        if (s.size() > t.size())
        {
            return false;
        }
        let c = 0;
        for (auto i = 0; i < t.size(); i++)
        {
            if (s[c] == t[i])
            {
                c++;
            }
        }
        return c == s.size();
    }
};