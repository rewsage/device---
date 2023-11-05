export interface IToolbar {
  ToolbarId: string;
  ToolbarTitle: string;
  ToolbarRows: string;
  ToolbarColumns: string;
  ToolbarWidth: string;
  ToolbarHeight: string;
  ToolbarBGColor: string;
  ToolbarBGImage: string;
  ToolbarRegions: IRegion[];
}

export interface IRegion {
  ToolbarRegionId: string;
  ToolbarRegionRows: string;
  ToolbarRegionColumns: string;
  ToolbarRegionWidth: string;
  ToolbarRegionToolbarStartCell: string;
  ToolbarRegionColspan: string;
  ToolbarRegionRowspan: string;
  ToolbarRegionBGColor: string;
  Buttons: IButtonRegion[];
}

export interface IButtonRegion {
  ToolbarButtonId: string;
  ToolbarButtonLabel: string;
  ToolbarButtonLabelColor: string;
  ToolbarButtonFontSize: string;
  ToolbarButtonBGColor: string;
  ToolbarButtonBGImage: string;
  ToolbarButtonRegionCell: string;
}
