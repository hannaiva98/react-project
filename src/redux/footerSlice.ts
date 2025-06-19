import { createSlice } from "@reduxjs/toolkit";

interface FooterState {
  backgroundImage: string;
  companyLinks: string[];
  templateLinks: { label: string; href: string }[];
  flowbaseLinks: string[];
}

const initialState: FooterState = {
  backgroundImage: "image6.png",
  companyLinks: ["Home", "Order", "FAQ", "Contact"],
  templateLinks: [
    { label: "Style Guide", href: "https://www.google.com/" },
    { label: "Changelog", href: "https://www.google.com/" },
    { label: "Licence", href: "https://www.google.com/" },
    { label: "Webflow University", href: "https://www.google.com/" },
  ],
  flowbaseLinks: ["More Cloneables"],
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setCompanyLinks(state, action) {
      state.companyLinks = action.payload;
    },
    setTemplateLinks(state, action) {
      state.templateLinks = action.payload;
    },
    setFlowbaseLinks(state, action) {
      state.flowbaseLinks = action.payload;
    },
  },
});

export const { setCompanyLinks, setTemplateLinks, setFlowbaseLinks } = footerSlice.actions;
export default footerSlice.reducer;
