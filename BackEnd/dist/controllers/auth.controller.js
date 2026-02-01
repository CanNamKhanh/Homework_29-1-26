"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
exports.authController = {
    create: (req, res) => {
        res.json({
            message: "Register Success",
            data: req.body,
        });
    },
};
//# sourceMappingURL=auth.controller.js.map