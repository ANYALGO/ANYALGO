class Solution:
    def threeSum(self, nums ) :
        s = set()
        ns = set()
        res = []
        dt = dict(zip(nums,range(len(nums))))
        for i in range(len(nums)):
            target = 0 - nums[i]
            if not target in ns:
                ns.add(target)
                ts = []
                for j in range(len(nums)):
                    if i != j:
                        if dt.get(target- nums[j]) is not None:
                            ts.append([dt.get(target - nums[j]), j])
                if len(ts) > 0:
                    for j in range(len(ts)):
                        if len(set([i]+ts[j]))==3:
                            std = sorted([nums[i], nums[ts[j][0]], nums[ts[j][1]]])
                            tu = tuple(std)
                            if not tu in s:
                                s.add(tu)
                                res.append(std)
        return res


