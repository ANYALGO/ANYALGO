// 0
// 01
// 0110
// 01101001
// 0110100110010110

class Solution
{
public:
    int kthGrammar(int N, int K)
    {
        if (N == 1)
        {
            return 0;
        }
        return kthGrammar(N - 1, (K + 1) / 2) == 0 ? (K - 1) % 2 : K % 2;
    }
};