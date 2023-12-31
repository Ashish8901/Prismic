// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *BlogData → Wearable*
 */
export interface BlogdataDocumentDataWearableItem {
  /**
   * blogimage field in *BlogData → Wearable*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.wearable[].blogimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blogimage: prismic.ImageField<never>;

  /**
   * blogDescription field in *BlogData → Wearable*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.wearable[].blogdescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blogdescription: prismic.KeyTextField;

  /**
   * blogCreateDate field in *BlogData → Wearable*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.wearable[].blogcreatedate
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  blogcreatedate: prismic.DateField;
}

/**
 * Item in *BlogData → Windows*
 */
export interface BlogdataDocumentDataWindowsItem {
  /**
   * blogimage field in *BlogData → Windows*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.windows[].blogimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blogimage: prismic.ImageField<never>;

  /**
   * blogDescription field in *BlogData → Windows*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.windows[].blogdescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blogdescription: prismic.KeyTextField;

  /**
   * blogCreateDate field in *BlogData → Windows*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.windows[].blogcreatedate
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  blogcreatedate: prismic.DateField;
}

/**
 * Item in *BlogData → Saas*
 */
export interface BlogdataDocumentDataSaasItem {
  /**
   * blogimage field in *BlogData → Saas*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.saas[].blogimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blogimage: prismic.ImageField<never>;

  /**
   * blogDescription field in *BlogData → Saas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.saas[].blogdescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blogdescription: prismic.KeyTextField;

  /**
   * blogCreateDate field in *BlogData → Saas*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.saas[].blogcreatedate
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  blogcreatedate: prismic.DateField;
}

/**
 * Content for BlogData documents
 */
interface BlogdataDocumentData {
  /**
   * Wearable field in *BlogData*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.wearable[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  wearable: prismic.GroupField<Simplify<BlogdataDocumentDataWearableItem>>;

  /**
   * Windows field in *BlogData*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.windows[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  windows: prismic.GroupField<Simplify<BlogdataDocumentDataWindowsItem>>;

  /**
   * Saas field in *BlogData*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blogdata.saas[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  saas: prismic.GroupField<Simplify<BlogdataDocumentDataSaasItem>>;
}

/**
 * BlogData document from Prismic
 *
 * - **API ID**: `blogdata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogdataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BlogdataDocumentData>,
    "blogdata",
    Lang
  >;

/**
 * Item in *HomePage → Navbar*
 */
export interface HomepageDocumentDataNavbarItem {
  /**
   * label field in *HomePage → Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.navbar[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *HomePage → Navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.navbar[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *HomePage → SiteLogo*
 */
export interface HomepageDocumentDataSitelogoItem {
  /**
   * link field in *HomePage → SiteLogo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.sitelogo[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * logo field in *HomePage → SiteLogo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.sitelogo[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Item in *HomePage → contactUs*
 */
export interface HomepageDocumentDataContactusItem {
  /**
   * link field in *HomePage → contactUs*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contactus[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *HomePage → contactUs*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contactus[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *HomePage → Services*
 */
export interface HomepageDocumentDataServicesItem {
  /**
   * name field in *HomePage → Services*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.services[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Item in *HomePage → Social Account Icons*
 */
export interface HomepageDocumentDataSocialAccountIconsItem {
  /**
   * icon field in *HomePage → Social Account Icons*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_account_icons[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

type HomepageDocumentDataSlicesSlice =
  | TrustedTypeSlice
  | ServicesSlice
  | Section1Slice
  | UserProfileSlice
  | TestimonialSlice
  | BlogsSlice
  | FeatureJobSlice
  | OurProcessSlice
  | CaseStudySlice;

/**
 * Content for HomePage documents
 */
interface HomepageDocumentData {
  /**
   * Navbar field in *HomePage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.navbar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navbar: prismic.GroupField<Simplify<HomepageDocumentDataNavbarItem>>;

  /**
   * SiteLogo field in *HomePage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.sitelogo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  sitelogo: prismic.GroupField<Simplify<HomepageDocumentDataSitelogoItem>>;

  /**
   * contactUs field in *HomePage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.contactus[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  contactus: prismic.GroupField<Simplify<HomepageDocumentDataContactusItem>>;

  /**
   * Services field in *HomePage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.services[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  services: prismic.GroupField<Simplify<HomepageDocumentDataServicesItem>>;

  /**
   * Footer Logo field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.footer_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  footer_logo: prismic.ImageField<never>;

  /**
   * Social Account Icons field in *HomePage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_account_icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_account_icons: prismic.GroupField<
    Simplify<HomepageDocumentDataSocialAccountIconsItem>
  >;

  /**
   * Slice Zone field in *HomePage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *HomePage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *HomePage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * HomePage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = BlogdataDocument | HomepageDocument;

/**
 * Primary content in *Blogs → Items*
 */
export interface BlogsSliceDefaultItem {
  /**
   * blogImage field in *Blogs → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.items[].blogimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  blogimage: prismic.ImageField<never>;

  /**
   * blogText field in *Blogs → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.items[].blogtext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  blogtext: prismic.RichTextField;

  /**
   * blogTime field in *Blogs → Items*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: blogs.items[].blogtime
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  blogtime: prismic.TimestampField;
}

/**
 * Default variation for Blogs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BlogsSliceDefaultItem>
>;

/**
 * Slice variation for *Blogs*
 */
type BlogsSliceVariation = BlogsSliceDefault;

/**
 * Blogs Shared Slice
 *
 * - **API ID**: `blogs`
 * - **Description**: Blogs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BlogsSlice = prismic.SharedSlice<"blogs", BlogsSliceVariation>;

/**
 * Primary content in *CaseStudy → Items*
 */
export interface CaseStudySliceDefaultItem {
  /**
   * title field in *CaseStudy → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *CaseStudy → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: case_study.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for CaseStudy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CaseStudySliceDefaultItem>
>;

/**
 * Slice variation for *CaseStudy*
 */
type CaseStudySliceVariation = CaseStudySliceDefault;

/**
 * CaseStudy Shared Slice
 *
 * - **API ID**: `case_study`
 * - **Description**: CaseStudy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CaseStudySlice = prismic.SharedSlice<
  "case_study",
  CaseStudySliceVariation
>;

/**
 * Primary content in *FeatureJob → Items*
 */
export interface FeatureJobSliceDefaultItem {
  /**
   * TopField field in *FeatureJob → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_job.items[].topfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  topfield: prismic.RichTextField;

  /**
   * FeatureInfo field in *FeatureJob → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_job.items[].featureinfo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  featureinfo: prismic.RichTextField;

  /**
   * country field in *FeatureJob → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: feature_job.items[].country
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  country: prismic.RichTextField;
}

/**
 * Default variation for FeatureJob Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureJobSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<FeatureJobSliceDefaultItem>
>;

/**
 * Slice variation for *FeatureJob*
 */
type FeatureJobSliceVariation = FeatureJobSliceDefault;

/**
 * FeatureJob Shared Slice
 *
 * - **API ID**: `feature_job`
 * - **Description**: FeatureJob
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeatureJobSlice = prismic.SharedSlice<
  "feature_job",
  FeatureJobSliceVariation
>;

/**
 * Primary content in *NavbarData → Primary*
 */
export interface NavbarDataSliceDefaultPrimary {
  /**
   * textField1 field in *NavbarData → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar_data.primary.textfield1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textfield1: prismic.KeyTextField;

  /**
   * textField2 field in *NavbarData → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar_data.primary.textfield2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  textfield2: prismic.KeyTextField;

  /**
   * textfield3 field in *NavbarData → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar_data.primary.textfield3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfield3: prismic.RichTextField;

  /**
   * textfield4 field in *NavbarData → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar_data.primary.textfield4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfield4: prismic.RichTextField;

  /**
   * textField5 field in *NavbarData → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar_data.primary.textfield5
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfield5: prismic.RichTextField;
}

/**
 * Default variation for NavbarData Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarDataSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavbarDataSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavbarData*
 */
type NavbarDataSliceVariation = NavbarDataSliceDefault;

/**
 * NavbarData Shared Slice
 *
 * - **API ID**: `navbar_data`
 * - **Description**: NavbarData
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarDataSlice = prismic.SharedSlice<
  "navbar_data",
  NavbarDataSliceVariation
>;

/**
 * Primary content in *OurProcess → Items*
 */
export interface OurProcessSliceDefaultItem {
  /**
   * Processtextfield field in *OurProcess → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_process.items[].processtextfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  processtextfield: prismic.RichTextField;

  /**
   * Processdescriptionfield field in *OurProcess → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_process.items[].processdescriptionfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  processdescriptionfield: prismic.RichTextField;

  /**
   * ColorClassname field in *OurProcess → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_process.items[].colorclassname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  colorclassname: prismic.KeyTextField;

  /**
   * index field in *OurProcess → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: our_process.items[].index
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  index: prismic.KeyTextField;
}

/**
 * Default variation for OurProcess Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurProcessSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<OurProcessSliceDefaultItem>
>;

/**
 * Slice variation for *OurProcess*
 */
type OurProcessSliceVariation = OurProcessSliceDefault;

/**
 * OurProcess Shared Slice
 *
 * - **API ID**: `our_process`
 * - **Description**: OurProcess
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type OurProcessSlice = prismic.SharedSlice<
  "our_process",
  OurProcessSliceVariation
>;

/**
 * Primary content in *Section1 → Primary*
 */
export interface Section1SliceDefaultPrimary {
  /**
   * textField1 field in *Section1 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.textfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfield: prismic.RichTextField;

  /**
   * paragraphfield field in *Section1 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.budgetfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  budgetfield: prismic.RichTextField;

  /**
   * section1image field in *Section1 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.section1image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  section1image: prismic.ImageField<never>;

  /**
   * video field in *Section1 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: section1.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkField;
}

/**
 * Default variation for Section1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section1SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Section1SliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Section1*
 */
type Section1SliceVariation = Section1SliceDefault;

/**
 * Section1 Shared Slice
 *
 * - **API ID**: `section1`
 * - **Description**: Section1
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Section1Slice = prismic.SharedSlice<
  "section1",
  Section1SliceVariation
>;

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * serviceText field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].servicetext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  servicetext: prismic.RichTextField;

  /**
   * serviceImage field in *Services → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].serviceimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  serviceimage: prismic.ImageField<never>;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Primary content in *Testimonial → Items*
 */
export interface TestimonialSliceDefaultItem {
  /**
   * testimonialImage field in *Testimonial → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.items[].testimonialimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  testimonialimage: prismic.ImageField<never>;

  /**
   * test field in *Testimonial → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.items[].test
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  test: prismic.RichTextField;

  /**
   * Name field in *Testimonial → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.items[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * description field in *Testimonial → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * technology field in *Testimonial → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.items[].technology
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  technology: prismic.KeyTextField;
}

/**
 * Default variation for Testimonial Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TestimonialSliceDefaultItem>
>;

/**
 * Slice variation for *Testimonial*
 */
type TestimonialSliceVariation = TestimonialSliceDefault;

/**
 * Testimonial Shared Slice
 *
 * - **API ID**: `testimonial`
 * - **Description**: Testimonial
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialSlice = prismic.SharedSlice<
  "testimonial",
  TestimonialSliceVariation
>;

/**
 * Primary content in *TrustedType → Items*
 */
export interface TrustedTypeSliceDefaultItem {
  /**
   * trustedImage1 field in *TrustedType → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: trusted_type.items[].trustedimage1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  trustedimage1: prismic.ImageField<never>;
}

/**
 * Default variation for TrustedType Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustedTypeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<TrustedTypeSliceDefaultItem>
>;

/**
 * Slice variation for *TrustedType*
 */
type TrustedTypeSliceVariation = TrustedTypeSliceDefault;

/**
 * TrustedType Shared Slice
 *
 * - **API ID**: `trusted_type`
 * - **Description**: TrustedType
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrustedTypeSlice = prismic.SharedSlice<
  "trusted_type",
  TrustedTypeSliceVariation
>;

/**
 * Primary content in *UserProfile → Primary*
 */
export interface UserProfileSliceDefaultPrimary {
  /**
   * textFieldName field in *UserProfile → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_profile.primary.textfieldname
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textfieldname: prismic.RichTextField;

  /**
   * userField field in *UserProfile → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_profile.primary.userfield
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  userfield: prismic.RichTextField;

  /**
   * userInfo field in *UserProfile → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: user_profile.primary.userinfo
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  userinfo: prismic.RichTextField;

  /**
   * profilePick field in *UserProfile → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: user_profile.primary.profilepick
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profilepick: prismic.ImageField<never>;
}

/**
 * Default variation for UserProfile Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UserProfileSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<UserProfileSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *UserProfile*
 */
type UserProfileSliceVariation = UserProfileSliceDefault;

/**
 * UserProfile Shared Slice
 *
 * - **API ID**: `user_profile`
 * - **Description**: UserProfile
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UserProfileSlice = prismic.SharedSlice<
  "user_profile",
  UserProfileSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogdataDocument,
      BlogdataDocumentData,
      BlogdataDocumentDataWearableItem,
      BlogdataDocumentDataWindowsItem,
      BlogdataDocumentDataSaasItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataNavbarItem,
      HomepageDocumentDataSitelogoItem,
      HomepageDocumentDataContactusItem,
      HomepageDocumentDataServicesItem,
      HomepageDocumentDataSocialAccountIconsItem,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BlogsSlice,
      BlogsSliceDefaultItem,
      BlogsSliceVariation,
      BlogsSliceDefault,
      CaseStudySlice,
      CaseStudySliceDefaultItem,
      CaseStudySliceVariation,
      CaseStudySliceDefault,
      FeatureJobSlice,
      FeatureJobSliceDefaultItem,
      FeatureJobSliceVariation,
      FeatureJobSliceDefault,
      NavbarDataSlice,
      NavbarDataSliceDefaultPrimary,
      NavbarDataSliceVariation,
      NavbarDataSliceDefault,
      OurProcessSlice,
      OurProcessSliceDefaultItem,
      OurProcessSliceVariation,
      OurProcessSliceDefault,
      Section1Slice,
      Section1SliceDefaultPrimary,
      Section1SliceVariation,
      Section1SliceDefault,
      ServicesSlice,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
      TestimonialSlice,
      TestimonialSliceDefaultItem,
      TestimonialSliceVariation,
      TestimonialSliceDefault,
      TrustedTypeSlice,
      TrustedTypeSliceDefaultItem,
      TrustedTypeSliceVariation,
      TrustedTypeSliceDefault,
      UserProfileSlice,
      UserProfileSliceDefaultPrimary,
      UserProfileSliceVariation,
      UserProfileSliceDefault,
    };
  }
}
