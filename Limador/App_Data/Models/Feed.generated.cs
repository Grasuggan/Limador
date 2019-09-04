//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v8.1.0
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedModels
{
	/// <summary>Feed</summary>
	[PublishedModel("feed")]
	public partial class Feed : PublishedContentModel, ISEO, ISettings
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		public new const string ModelTypeAlias = "feed";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		public new static IPublishedContentType GetModelContentType()
			=> PublishedModelUtility.GetModelContentType(ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Feed, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(), selector);
#pragma warning restore 0109

		// ctor
		public Feed(IPublishedContent content)
			: base(content)
		{ }

		// properties

		///<summary>
		/// Hide Dates: Hides the date from posts created in this feed
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideDate")]
		public bool HideDate => this.Value<bool>("hideDate");

		///<summary>
		/// Hide Share Buttons: Removes the share buttons from posts created in this feed
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideShareButtons")]
		public bool HideShareButtons => this.Value<bool>("hideShareButtons");

		///<summary>
		/// Widgets
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("widgets")]
		public IEnumerable<IPublishedElement> Widgets => this.Value<IEnumerable<IPublishedElement>>("widgets");

		///<summary>
		/// Hide In Sitemap: Hide this page from the sitemap.xml file
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideInSitemap")]
		public bool HideInSitemap => SEO.GetHideInSitemap(this);

		///<summary>
		/// Description: Short description of the page. Roughly 155 Characters for optimal SEO
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription => SEO.GetMetaDescription(this);

		///<summary>
		/// Image: This image is shown when the page shared on social media
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("metaImage")]
		public IPublishedContent MetaImage => SEO.GetMetaImage(this);

		///<summary>
		/// Title: Define the title of a page. Google typically displays the first 50-60 characters of a title tag
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("metaTitle")]
		public string MetaTitle => SEO.GetMetaTitle(this);

		///<summary>
		/// Sitemap Page Change Frequently: How frequently the page is likely to change. This value provides general information to search engines and may not correlate exactly to how often they crawl the page.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("sitemapPageChangeFrequently")]
		public string SitemapPageChangeFrequently => SEO.GetSitemapPageChangeFrequently(this);

		///<summary>
		/// Sitemap Page Priority: The priority of this page relative to other pages on your site. Default is 0.5
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("sitemapPagePriority")]
		public decimal SitemapPagePriority => SEO.GetSitemapPagePriority(this);

		///<summary>
		/// Hide Footer: Hide the Footer on this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideFooter")]
		public bool HideFooter => Settings.GetHideFooter(this);

		///<summary>
		/// Hide From Search: If checked, this page will not appear in search results
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideFromSearch")]
		public bool HideFromSearch => Settings.GetHideFromSearch(this);

		///<summary>
		/// Hide Header: Hide the Header on this page
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("hideHeader")]
		public bool HideHeader => Settings.GetHideHeader(this);

		///<summary>
		/// Page Alias: Enter a page alias to be used instead of node name in navigation
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("pageAlias")]
		public string PageAlias => Settings.GetPageAlias(this);

		///<summary>
		/// Transparent Header: Removes the header background color before scroll
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("transparentHeader")]
		public bool TransparentHeader => Settings.GetTransparentHeader(this);

		///<summary>
		/// Transparent Header Color: Set the color theme for the transparent header. Dark will show a dark navigation and the "Logo On Dark"-logo
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("transparentHeaderColor")]
		public string TransparentHeaderColor => Settings.GetTransparentHeaderColor(this);

		///<summary>
		/// Hide In Navigation: Hide this page from any navigation or listing
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder", "8.1.0")]
		[ImplementPropertyType("umbracoNaviHide")]
		public bool UmbracoNaviHide => Settings.GetUmbracoNaviHide(this);
	}
}
