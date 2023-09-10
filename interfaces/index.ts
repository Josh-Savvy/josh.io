export interface IProject {
	id: number;
	title: string;
	desc: string;
	img: string;
	personal?: boolean;
	link?: string;
	github?: string;
	tags: string[];
}

export interface IRoute {
	title: string;
	path: string;
}

export interface IFooterCol {
	name: string;
	link: string;
	icon?: string;
	leavesWebsite: boolean;
}

export interface IProjectProps {
	overwriteProjects?: IProject[];
}
