import './Header.scss';
import LogoIcon from '../../icons/logo.svg';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {TextField} from "@mui/material";

export const Header = () => {

    return (
        <header className="header">
            <img
                src={LogoIcon}
                alt="logotype of monblan"
                className="header-logo"
            />
            <div className="header-content">
                <div className="header-top">
                    <p className="header-top_title">monblanproject</p>
                    <p className="header-top_date">Start on 17-02-2016</p>
                </div>
                <div className="header-details">
                    <p className="header-details_posts">870 <span className="different">posts</span></p>
                    <p className="header-details_followers">11,787 <span className="different">followers</span></p>
                    <p className="header-details_following">112 <span className="different">following</span></p>
                </div>
                <div className="header-date">
                    <p className="header-date_title">Date</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slots={{ textField: TextField }}
                            slotProps={{
                                textField: {
                                    placeholder: 'from',
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            slots={{ textField: TextField }}
                            slotProps={{
                                textField: {
                                    placeholder: 'to',
                                    size: 'small',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </header>
    )
}
