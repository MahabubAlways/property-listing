import styled from 'styled-components';
export const AppContainer = styled.div`

h1 {
    font-size: 20px;
    margin-bottom: 15px;
}
.listings {
    width: 50%;
    margin-left: 50%;
    position: relative;
    z-index: 3;
}
.cards {
    max-width: 100%;
}
.cards-list {
    background-color: #fff;
    padding: 10px;
    &.is-empty {
        background-color: #f3f3f3;
    }
}
.card {
    border: 3px #fff solid;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
    transition: all 0.3s linear;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    &:hover {
        background-color: #f3f3f3;
        border-color: #f3f3f3;
    }
    padding: 10px;
    img {
        max-width: calc(100%);
        margin: 0 auto;
        display: block;
    }
    .index {
        background-color: rgba(0,0,0,0.2);
        color: #fff;
        line-height: 20px;
        font-size: 14px;
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        padding: 0 10px;
    }
    .price {
        margin: 0;
        padding: 10px 0;
        font-weight: bold;
    }
    .details {
        position: relative;
    }
    .features {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            padding-left: 24px;
            margin-right: 10px;
            display: inline-block;
            span {display: none;}
            &.icon-bed {
                background: url(assets/images/bed-left-side.svg) left center;
                background-size: auto 80%;
                background-repeat: no-repeat;
            }
            &.icon-bath {
                background: url(assets/images/bathtub.svg);
                background-size: auto 80%;
                background-repeat: no-repeat;
            }
            &.icon-car {
                background: url(assets/images/car-compact.svg);
                background-size: auto 80%;
                background-repeat: no-repeat;
            }
            
        }
    }
    &.is-active {
        border-color: #1078ff;
        .index {
            background-color: #1078ff;
        }
    }
}
.warning {
    font-size: 30px;
    text-align: center;
    margin-top: 30%;
    width: 100%;
    img {
        max-width: 100px;
        margin: 0 auto 30px auto;
    }
}
.credits {
    text-align: center;
    padding: 70px;
    opacity: .5;
    transition: opacity 0.3s linear;
    &:hover {
        opacity: 1;
    }
    a {
        color: #4b4668;
    }
}
header {
    text-align: center;
    padding: 30px;
    z-index: 2;
    position: relative;
    background-color: #222222;
    img {
        max-width: 40px;
    }
    h1 {
        display: inline-block;
        font-size: 16px;
        position: relative;
        bottom: -7px;
        
        margin: 0 0 20px 5px;
        text-transform: uppercase;
        color: #fff;
        
    }
    .btn-clear {
        background: transparent;
        border: none;
        text-decoration: underline;
        color: #1078ff;
        &:hover,
        &:active {
            text-decoration: none;
        }
    }
    @media (min-width: 992px) {
        h1 {
            font-size: 20px;
            bottom: -10px;
            margin: 0 0 50px 30px;
            br {
                display: none;
            }
        }
        img {
            max-width: 70px;
            display: inline-block;
        }
    }
    @media (min-width: 1400px) {
        
        h1 {
            font-size: 40px;
            margin: 0 0 0 30px;
        }
        .btn-filter {
            position: absolute;
            right: 20px;
            top: 50px;
            width: 80px;
        }
    }
}
.btn-filter {
    border-radius: 5px;
    padding: 3px 15px;
    font-size: 16px;
    background: transparent;
    color: #fff;
    border: 1px #fff solid;
    transition: all 0.3s linear;
    display: block;
    width: 100%;
    &:hover,
    &:active {
        background-color: #fff;
        color: #222222;
    }
    span {display: none}
    @media (min-width: 992px) {
        strong {display: none;}
        span {display: inline-block;}
    }
}
.filter {
    transform: translateY(-100%);
    transition: transform 0.3s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    position: fixed;
    top: 0;
    height: auto;
    left: auto;
    right: 0;
    width: 50%;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
    background-color: #fff;
    z-index: 3;
    text-align: left;
    padding: 32px 130px 30px 30px;
    .filterBox {
        margin: 0 20px 20px 0;
        display: inline-block;
        label {
            display: block;
        }
        &.filterFrom {
            margin-right: 10px;
        }
    }
    .btn-filter {
        position: absolute;
        right: 20px;
        top: 20px;
        width: auto;
        @media (min-width: 992px) {
            top: 50px;
            width: 80px;
        }
    }
}
.filter-is-visible {
    .filter {
        transform: translateY(0%);
    }
    .btn-filter {
        background-color: #1078ff;
        &:hover, &:active {
            background-color: #1078ff;
            color: #fff;
        }
    }
}
.mapContainer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 50%;
    z-index: 2;
}
#map {
    width: 100%;
    height: 100%;
    background-color: rgba(173, 216, 230, 0.4); //remove
}
.pin{
    cursor: pointer;
}
.pin-content{
    opacity: 1 !important;
    position: absolute;
    display: inline-block;
    background: #ffffff;
    color: #000000;
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 12px;
    bottom: 10px;
    left: -6px;
    z-index: 1000001;
}
.pin-content:before{
    content: '';
    position: absolute;
    border: 6px solid transparent;
    border-top-color: #ffffff;
    z-index: 1000001;
    bottom: -12px;
}
`;