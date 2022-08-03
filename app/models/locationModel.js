const locationModel = {
    name: "location",
    state: {
        list: [
            { value: 1, label: "الخرطوم, العمارات" },
            { value: 2, label: "الخرطوم, الرياض" },
            { value: 3, label: "الخرطوم, المعمورة" },
            { value: 4, label: "الخرطوم, أركويت" },
            { value: 5, label: "الخرطوم, المقرن" },
            { value: 6, label: "الخرطوم, الأزهري" },
            { value: 7, label: "الخرطوم, الكلاكلة" },
            { value: 8, label: "الخرطوم, المنشية" },
            { value: 9, label: "امدرمان, بيت المال" },
            { value: 10, label: "امدرمان, الملازمين" },
            { value: 11, label: "امدرمان, المهندسين" },
            { value: 12, label: "امدرمان, الفتيحاب" },
            { value: 13, label: "امدرمان, الثورة" },
            { value: 14, label: "امدرمان, أمبدة" },
            { value: 15, label: "امدرمان, مدينة النيل" },
            { value: 16, label: "امدرمان, حي الروضة" },
            { value: 17, label: "امدرمان, الواحة" },
            { value: 18, label: "امدرمان, العباسية" },
            { value: 19, label: "بحري, كافوري" },
            { value: 20, label: "بحري, الصافية" },
            { value: 21, label: "بحري, المؤسسة" },
            { value: 22, label: "بحري, الحاج يوسف" },
        ],
        selected: "",
        visible: false,
    },
    reducers: {
        showModal: (state) => {
            return { ...state, visible: true };
        },
        hideModal: (state) => {
            return { ...state, visible: false };
        },
        set: (state, payload) => {
            return { ...state, selected: payload };
        },
    },
};

export default locationModel;
