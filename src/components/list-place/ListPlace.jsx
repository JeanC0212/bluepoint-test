import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

export const ListPlace = ({ setSelectedPosition, place }) => {
	return (
		<List key={place?.osm_id}>
			<ListItem
				disablePadding
				onClick={() => {
					setSelectedPosition(place);
				}}
			>
				<ListItemButton>
					<ListItemIcon>
						<img
							src="./placeholder.png"
							alt="placeholder"
							style={{ width: "38px", height: "38px" }}
						/>
					</ListItemIcon>
					<ListItemText primary={place?.display_name} />
				</ListItemButton>
			</ListItem>
			<Divider />
		</List>
	);
};
